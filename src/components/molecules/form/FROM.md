# form/inputs

- src\components\molecules\inputs: create input components in this directory, each component must have InputLabelAndErrors type as union of its props and must pass label explicitly
- register created component and its rule in an object in form.ts file located at: src\components\molecules\form\form.ts
- register every form using DynamicForm component inside handle layout, to get scroll to first erorr feature:

    <HandleLayoutProvider>
      <DynamicForm
        schema={testFormSchema}
        defaultValues={defaultValues}
        fields={testFields}
        onSubmit={data => {
          // console.log(data.email);
          // console.log(data.password);
        }}
      />
      
    </HandleLayoutProvider>

- pass fields as array of objects:

  const testFields = [
  {
  name: 'search',
  fieldType: 'SEARCH',
  },
  {
  name: 'checkbox',
  fieldType: 'CHECKBOX',
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
  name: 'media',
  fieldType: 'FILE',
  },
  {
  name: 'profile',
  fieldType: 'AVATAR',
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
  ] satisfies Fields<TestFormValues>[];

- these name must match zod schema naming like:

      export const testFormSchema = z.object({

  profile: z
  .object({
  uri: z.string(),
  name: z.string().optional(),
  mimeType: z.string().optional(),
  size: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  })
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
  switch: z.boolean().optional(),
  checkbox: z.boolean().optional().refine(Boolean, {
  message: 'Terms and conditions must be checked',
  }),
  search: z.string().optional().refine(Boolean, {
  message: 'Search is required',
  }),
  });

- fieldType must match the component name registered in Form component mapping in form.ts

- you can pass respective props of each input component as well, but if you dont want to keep them optional else typescript will complain

- for reference see SampleForm located at; src\components\molecules\form\SampleForm.tsx
