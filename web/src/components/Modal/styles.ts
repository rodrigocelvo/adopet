import styled from 'styled-components';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { THEME } from '../../theme';
export const Container = styled.div``;

export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
  background-color: ${THEME.COLORS.OVERLAY};
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
`;
export const AlertDialogContent = styled(AlertDialog.Content)`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 400px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`;

export const AlertDialogTrigger = styled(AlertDialog.Trigger)``;
export const AlertDialogPortal = styled(AlertDialog.Portal)``;

export const AlertDialogTitle = styled(AlertDialog.Title)`
  margin: 0;
  color: #222828;
  font-size: 24px;
  font-weight: 600;
`;
export const AlertDialogDescription = styled(AlertDialog.Description)`
  margin-bottom: 20px;
  color: #6f6e77;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 10px;
`;

export const AlertDialogCancel = styled(AlertDialog.Cancel)`
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  background-color: #e9e8ea;
  color: #6f6e77 !important;
  border: 0;
  height: 35px;
  color: ${THEME.COLORS.HEADING};
  outline: none;
  border: 1px solid transparent;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #d6d6d7;
  }

  &:focus {
    border-color: #6f6e77;
  }
`;

export const AlertDialogAction = styled(AlertDialog.Action)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  background-color: #ffe5e5;
  color: #cd2b31 !important;
  border: 0;
  height: 35px;
  color: ${THEME.COLORS.HEADING};
  outline: none;
  border: 1px solid transparent;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f9d3d3;
  }

  &:focus {
    border-color: #f87171;
  }
`;
