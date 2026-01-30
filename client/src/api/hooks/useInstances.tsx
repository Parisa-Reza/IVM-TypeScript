import { useMutation } from '@tanstack/react-query';
import http from '@/lib/http';
import type { CreateInstancePayload } from '../types';
export const useInstanceMutation = () => {
  return useMutation({
    mutationFn: (instancePayload: CreateInstancePayload) =>
      http.post('/api/admin/instances', instancePayload),

    onSuccess: () => {
      alert('instance created successfully');
    },
    onError: () => {
      alert('instance creation failed');
    },
  });
};

