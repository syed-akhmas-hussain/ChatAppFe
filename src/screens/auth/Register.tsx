import { AppScreen } from '@/components/layout';
import { DynamicForm } from '@/components/molecules/form';
import { HandleLayoutProvider } from '@/hooks';
import { RegisterProps } from './types';
import { RegisterFormSchema } from './Schemas';
import { useRegister } from './useRegister';

export const Register = ({ navigation }: RegisterProps) => {
  const { fields, defaultValues, onSubmit } = useRegister(navigation);
  return (
    <HandleLayoutProvider>
      <AppScreen scrollable>
        <DynamicForm
          schema={RegisterFormSchema}
          fields={fields}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          // onError={(errors) => {
          //     console.log("Register form errors", errors);
          // }}
          title="Sign Up"
        />
      </AppScreen>
    </HandleLayoutProvider>
  );
};

/*
Payload example:
{
  "confirm_password": "12345678",
  "email": "syedakhmash@gmail.com",
  "name": "Syed Akhmas Hussain",
  "password": "12345678",
  "profile": [
    {
      "height": 1600,
      "mimeType": "image/jpeg",
      "name": "1000422167.jpg",
      "size": 100632,
      "uri": "file:///data/user/0/com.ak.chatapp/cache/rn_image_picker_lib_temp_5181557a-4ff9-40f1-b118-44fe55eafdd5.jpg",
      "width": 900
    }
  ],
  "terms": true
} pass this data to to backend via api and remove confirm password and pass email only to otp screen
*/
