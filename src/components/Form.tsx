import { useForm, SubmitHandler } from "react-hook-form";
import { IInputs } from '../types'

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<IInputs>({
    defaultValues: {
      title: '',
      isCompleted: false,
      pictureUrl: ''
    }
  });
  
  const onSubmit: SubmitHandler<IInputs> = data => {
    console.log(data);
    reset();
  };
  
  console.log(watch("title"));
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Title</label>
      <input {...register("isCompleted")} type="checkbox"/>
      <input {...register("title", { required: true, maxLength: 100 })}/>
      {errors.title && <p>This field is required</p>}
      <label>Picture</label>
      <input
        {...register("pictureUrl")}
      />
      <input type="submit" />
    </form>
  )
}
