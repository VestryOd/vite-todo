export interface IInputs {
  title: string,
  isCompleted: boolean,
  pictureUrl?: string
}

export interface ITodo extends IInputs {
  id: string;
}
