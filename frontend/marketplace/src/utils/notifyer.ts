import { toast } from 'vue3-toastify';

export const useNotifyer = () => {
  const notifyer = toast;

  return {
    notifyer,
  }
}
