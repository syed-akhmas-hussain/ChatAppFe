import { AppScreen } from '@/components/layout';
import { Message } from './components/Message';
import { formatDateTime } from '@/utils/utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@/navigation/types';
import { Sizes } from '@/theme';

export const messages: Message[] = [
  {
    id: '1',
    isUserMessage: false,
    message: 'Hey! How are you doing?',
    time: new Date('2026-09-11T21:41:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '2',
    isUserMessage: true,
    message: "I'm good! Just working on the project. How about you?",
    time: new Date('2026-09-11T21:42:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '3',
    isUserMessage: false,
    message: "I'm doing pretty well. Finally got some free time today 😅",
    time: new Date('2026-09-11T21:43:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '4',
    isUserMessage: true,
    message: 'Nice! Did you finish that UI you were working on?',
    time: new Date('2026-09-11T21:44:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '5',
    isUserMessage: false,
    message:
      'Almost. I still need to fix the chat screen and make the message bubbles look right.',
    time: new Date('2026-09-11T21:45:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '6',
    isUserMessage: true,
    message: 'Haha, same problem here.',
    time: new Date('2026-09-11T21:46:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '7',
    isUserMessage: false,
    message: 'We should probably stop overthinking it 😂',
    time: new Date('2026-09-11T21:47:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '8',
    isUserMessage: true,
    message: 'True. Keep it simple and ship it.',
    time: new Date('2026-09-11T21:48:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '9',
    isUserMessage: false,
    message: 'Are you free tomorrow?',
    time: new Date('2026-09-11T21:51:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '10',
    isUserMessage: true,
    message: 'Yeah, I should be free after 6.',
    time: new Date('2026-09-11T21:52:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '11',
    isUserMessage: false,
    message: 'Perfect. Let’s grab some coffee and catch up.',
    time: new Date('2026-09-11T21:53:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '12',
    isUserMessage: true,
    message: 'Sounds good! Where do you want to go?',
    time: new Date('2026-09-11T21:54:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '13',
    isUserMessage: false,
    message:
      'Maybe somewhere around the main road? There are a couple of nice places there.',
    time: new Date('2026-09-11T21:55:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '14',
    isUserMessage: true,
    message: 'Sure, I know a place. I’ll send you the location tomorrow.',
    time: new Date('2026-09-11T21:56:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '15',
    isUserMessage: false,
    message: 'Nice 😂 See you then!',
    time: new Date('2026-09-11T21:57:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '16',
    isUserMessage: true,
    message: 'See you! 👋',
    time: new Date('2026-09-11T21:58:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '17',
    isUserMessage: false,
    message:
      'Oh, and don’t forget to bring your laptop. I want to check out that chat UI you were building.',
    time: new Date('2026-09-11T21:59:00+05:00'),
    messageStatus: 'DELIVERED',
  },
  {
    id: '18',
    isUserMessage: true,
    message: 'Haha, I knew you were going to ask about it 😅',
    time: new Date('2026-09-11T22:00:00+05:00'),
    messageStatus: 'SENT',
  },
];
type Message = Record<'id' | 'message', string> & {
  id: string;
  message: string;
  time: Date;
  isUserMessage: boolean;
  messageStatus: 'SENT' | 'DELIVERED';
};
export type AllMessagesProp = NativeStackScreenProps<
  AppStackParamList,
  'AllMessages'
>;
//NativeStackScreenProps: this is used to attach screen based props from navigation and wrap actual screen props inside route.params
export const AllMessages = ({ route }: AllMessagesProp) => {
  return (
    <AppScreen scrollable paddingTop={Sizes.md}>
      {messages.map(message => (
        <Message
          key={message.id}
          {...message}
          time={formatDateTime('time', message.time)}
        />
      ))}
    </AppScreen>
  );
};
