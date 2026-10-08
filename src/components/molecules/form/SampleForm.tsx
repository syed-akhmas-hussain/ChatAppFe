import { z } from 'zod';
import { isValidNumber } from 'react-native-phone-entry';
import { Fields } from './types';
import { DynamicForm } from './DynamicForm';
import { HandleLayoutProvider } from '@/hooks/useHandleLayout';
import { InputOptions } from '../inputs/choice/types';
export const testFormSchema = z.object({
  profile: z
    .array(
      z.object({
        uri: z.string(),
        name: z.string().optional(),
        mimeType: z.string().optional(),
        size: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
      }),
    )
    .optional()
    .refine(Boolean, {
      message: 'Media expected',
    }),
  media: z
    .array(
      z.object({
        uri: z.string(),
        name: z.string().optional(),
        mimeType: z.string().optional(),
        size: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
      }),
    )
    .optional()
    .refine(Boolean, {
      message: 'Media expected',
    }),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  age: z.coerce.number().min(18, 'You must be at least 18'),
  otp: z.string().length(4, 'OTP must be 4 digits'),
  phone: z
    .object({
      phoneNumber: z.string(),
      countryCode: z.string(),
      callingCode: z.string(),
    })
    .refine(
      value => {
        return isValidNumber(value.phoneNumber, value.countryCode);
      },
      {
        message: 'Invalid phone number',
      },
    ),
  dateOfBirth: z.date().optional().refine(Boolean, {
    message: 'Date of birth is required',
  }),

  appointmentDateTime: z.date().optional().refine(Boolean, {
    message: 'Appointment date and time is required',
  }),

  appointmentTime: z.date().optional().refine(Boolean, {
    message: 'Appointment time is required',
  }),

  startTime: z.date().optional().refine(Boolean, {
    message: 'Start time is required',
  }),

  endTime: z.date().optional().refine(Boolean, {
    message: 'End time is required',
  }),
  switch: z.boolean().optional(),
  checkbox: z.array(z.string()).min(1, {
    message: 'Please select at least one option',
  }),
  search: z.string().optional().refine(Boolean, {
    message: 'Search is required',
  }),
  radio: z.array(z.string()).min(1, {
    message: 'Please select an option',
  }),
});

export type TestFormValues = z.infer<typeof testFormSchema>;

export const LoginForm = () => {
  const defaultValues: TestFormValues = {
    profile: undefined,
    name: '',
    email: '',
    password: '',
    bio: '',
    age: 0,
    otp: '',
    phone: {
      phoneNumber: '',
      callingCode: '',
      countryCode: '',
    },
    dateOfBirth: undefined,
    appointmentDateTime: undefined,
    appointmentTime: undefined,
    startTime: undefined,
    endTime: undefined,
    media: undefined,
    switch: false,
    checkbox: [],
    search: undefined,
    radio: [],
  };
  const options: InputOptions[] = [
    {
      label: 'React',
      value: 'react',
    },
    {
      label: 'React Native',
      value: 'react-native',
    },
    {
      label: 'TypeScript',
      value: 'typescript',
    },
    {
      label: 'Node.js',
      value: 'nodejs',
    },
    {
      label: 'Flutter',
      value: 'flutter',
      disabled: true,
    },
  ];
  const testFields = [
    {
      name: 'media',
      fieldType: 'FILE',
    },
    {
      name: 'profile',
      fieldType: 'AVATAR',
    },
    {
      name: 'search',
      fieldType: 'SEARCH',
    },
    {
      name: 'checkbox',
      fieldType: 'CHECKBOX',
      options,
    },
    {
      name: 'switch',
      fieldType: 'SWITCH',
    },
    {
      name: 'otp',
      fieldType: 'OTP',
    },
    {
      name: 'phone',
      fieldType: 'PHONE',
    },
    {
      name: 'dateOfBirth',
      fieldType: 'DATE',
    },
    {
      name: 'appointmentDateTime',
      fieldType: 'DATE_TIME',
    },
    {
      name: 'appointmentTime',
      fieldType: 'TIME',
    },
    {
      layout: 'row',
      fields: [
        {
          name: 'startTime',
          fieldType: 'TIME',
        },
        {
          name: 'endTime',
          fieldType: 'TIME',
        },
      ],
    },
    {
      name: 'name',
      fieldType: 'TEXT',
    },
    {
      name: 'email',
      fieldType: 'EMAIL',
    },
    {
      name: 'password',
      fieldType: 'PASSWORD',
    },
    {
      name: 'bio',
      fieldType: 'MULTILINE',
    },
    {
      name: 'age',
      fieldType: 'NUMBER',
    },
    {
      name: 'radio',
      fieldType: 'RADIO',
      options,
    },
  ] satisfies Fields<TestFormValues>[];
  return (
    <HandleLayoutProvider>
      <DynamicForm
        schema={testFormSchema}
        defaultValues={defaultValues}
        fields={testFields}
        onSubmit={data => {
          console.log(data);
        }}
        title="Test Form"
      />
    </HandleLayoutProvider>
  );
};
