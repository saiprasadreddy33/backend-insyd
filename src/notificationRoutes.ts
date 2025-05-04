import express from 'express';
import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { supabase } from './supabaseClient';

const router = express.Router();

router.post('/', asyncHandler(async (req: Request, res: Response) => {
  const { userId, actorId, type } = req.body;

  const message = `${actorId} ${
    type === 'follow' ? 'started following you' :
    type === 'post' ? 'posted new content' : 'liked your post'
  }`;

  const { data, error } = await supabase
    .from('notifications')
    .insert([{ user_id: userId, actor_id: actorId, type, message }]);

  if (error) {
    res.status(500).json({ error });
    return;
  }

  res.status(201).json(data);
}));

router.get('/:userId', asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    res.status(500).json({ error });
    return;
  }

  res.status(200).json(data);
}));

export { router };
