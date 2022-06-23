import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

export default function ArticleForm() {
  const {
    formState: { errors },
    setValue,
    setFocus,
    handleSubmit,
    register,
  } = useForm();

  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries('articles');
    setValue('title', '');
    setValue('content', '');
    setTimeout(() => setFocus('title'), 100);
  };

  const mutation = useMutation((data) => axios.post('/api/articles', data), {
    onSuccess,
  });

  const onSubmit = (article) => {
    mutation.mutate(article);
  };

  return (
    <>
      <h1>Post a new article</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={mutation.isLoading}>
          <input
            type='text'
            placeholder='my title'
            {...register('title', {
              required: {
                value: true,
                message: 'this field is required',
              },
            })}
          />
          <p style={{ color: 'red' }}>{errors.title?.message}</p>
          <textarea
            style={{ display: 'block', marginTop: 10, padding: 5 }}
            placeholder='my content'
            {...register('content', {
              required: {
                value: true,
                message: 'this field is required',
              },
            })}
          />
          <p style={{ color: 'red' }}>{errors.content?.message}</p>
          <button type='submit'>Add</button>
        </fieldset>
      </form>
    </>
  );
}
