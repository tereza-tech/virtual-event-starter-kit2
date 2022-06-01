import { ArrowRightIcon } from '@100mslive/react-icons';
import HmsLogo from '@components/icons/icon-hms';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../Button';
import LinkButton from '../LinkButton';

const data = [
  {
    name: 'Moderator',
    roleName: 'moderator',
    role: 'backstage',
    desc: `This role is meant for the event organisers. The moderator is like a stage admin - can add speakers, remove them, invite attendees on stage, kick them out of the event, etc`
  },
  {
    name: 'Speaker',
    roleName: 'speaker',
    role: 'stage',
    desc:
      'This one is self explanatory. Use this role for folks who are going to be the main guests of the session. Speakers can also invite attendees on the stage, and respond to public chat messages.'
  }
];

const DemoModal = () => {
  const [stage, setStage] = React.useState(``);
  const router = useRouter();
  React.useEffect(() => {
    if (router.query.slug) {
      setStage(router.query.slug as string);
    }
  }, [router]);
  return (
    <div className="font-sans">
      <div>
        {data.map(m => (
          <div
            className="flex md:flex-row flex-col justify-between py-4"
            style={{ borderBottom: '1px solid #323232' }}
            key={`${m.roleName}-${m.name}`}
          >
            <div className="text-left max-w-xs">
              <span className={`badge ${m.roleName}-badge`}>{m.roleName}</span>
              <p className="text-gray-300 text-xs">{m.desc}</p>
            </div>
            <div className="flex items-center space-x-6">
              <CopyButton text={`${window.location.host}/stage/${stage || 'a'}?role=${m.role}`} />
              <LinkButton className="w-[200px]" href={`/stage/${stage || 'a'}?role=${m.role}`}>
                Join as {m.name} <ArrowRightIcon height={20} />
              </LinkButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoModal;

export const CopyButton = ({ text = '' }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
  return (
    <div className="relative">
      {copied ? (
        <p className="absolute top-10 left-0 flex bg-gray-600 justify-center  rounded-lg w-48 p-2">
          Copied to clipboard!
        </p>
      ) : null}
      <Button variant="secondary" onClick={copy}>
        Invite
      </Button>
    </div>
  );
};
