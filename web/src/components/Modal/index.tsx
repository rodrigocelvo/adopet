import React from 'react';

import {
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from './styles';

import toast, { Toaster } from 'react-hot-toast';
import { api } from '../../services/api';

interface Props {
  petId: string;
}

async function handleDelete(petId: string) {
  try {
    await api.delete(`/pets/${petId}`);
    toast.success('Pet deletado com sucesso.');
  } catch (err) {
    console.log(err);
    toast.error('Não foi possível deletar esse pet.');
  }
}

export function ToastDeletedPet() {
  return <Toaster position="bottom-center" />;
}

export function Modal({ petId }: Props) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente o anúncio do bichinho. :(
        </AlertDialogDescription>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialogAction asChild>
            <button onClick={() => handleDelete(petId)}>Sim, deletar</button>
          </AlertDialogAction>
          <AlertDialogCancel asChild>
            <button>Cancelar</button>
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  );
}
