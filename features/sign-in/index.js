import { useState } from 'react';
import { useFormik } from 'formik';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { Wrapper, Block, ActionSection } from './styled';
import validationSchema, { signInFormSchema } from './validationSchema';

import Text from '../../components/text';
import Form from '../../components/form';
import Button from '../../components/form/button';
import Input from '../../components/form/input-field';

import useAuth from '../../hooks/auth/useAuth';

export default function SignInForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { push } = useRouter();
  const { login } = useAuth();

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: async ({ email, password }) => {
        try {
          // const { data } = await signIn({
          //   email,
          //   password,
          // });

          login();
          setIsSuccess(true);
          push('/home');
        } catch (error) {
          setError(error);
        }

        resetForm();
      },
    });

  if (error) {
    return (
      <Wrapper>
        <div>Something went wrong</div>
      </Wrapper>
    );
  }

  if (isSuccess) {
    return (
      <Wrapper>
        <div>Successfully signed in</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {signInFormSchema.map(({ id, label, type, placeholder }) => {
          return (
            <Input
              key={id}
              name={id}
              type={type}
              value={values[id]}
              placeholder={placeholder}
              onChange={handleChange}
              hasError={errors[id] && touched[id]}
              isSuccess={touched[id] && !errors[id]}
              message={errors[id]}
            />
          );
        })}

        <ActionSection>
          <Button type="submit">Sign In</Button>

          <Link href="/forgot-password" passHref>
            <Button kind="text">Forgot your password?</Button>
          </Link>
        </ActionSection>
      </Form>

      <br />

      <Block>
        <Text>
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" passHref>
            <Button kind="text">Sign up</Button>
          </Link>
        </Text>

        <Text as="small">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </Text>
      </Block>
    </Wrapper>
  );
}
