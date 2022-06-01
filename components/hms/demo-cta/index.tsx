import styles from './index.module.css';
import cn from 'classnames';
import React from 'react';
import useClickOutside from '@lib/hooks/use-click-outside';
import * as Dialog from '@radix-ui/react-dialog';
import { CrossIcon } from '@100mslive/react-icons';
import InfoIcon from '@components/icons/icon-info';
import DemoModal from '../demo-modal';

const DemoButton = () => {
  const ctaRef = React.useRef(null);
  return (
    <div style={{position: 'relative'}}>
    {<Dialog.Root>
      <Dialog.Overlay className={cn(styles['overlay'])} />
      <Dialog.Trigger asChild>
        <button ref={ctaRef} id="cta-btn" className={cn(styles['cta-btn'])}>
          Try Demo
        </button>
      </Dialog.Trigger>
      <div id="cta-tooltip" className={cn(styles['tooltip'])}>
        <InfoIcon />
        Click here to demo a live webinar powered by 100ms
      </div>
      <Dialog.Content className={cn(styles['content'], 'dialog-animation')}>
        <Dialog.Close asChild className={cn(styles['close-btn'])}>
          <button>
            <CrossIcon />
          </button>
        </Dialog.Close>
        <DemoModal />
      </Dialog.Content>
  </Dialog.Root>}</div>
  );
};

export default DemoButton;
