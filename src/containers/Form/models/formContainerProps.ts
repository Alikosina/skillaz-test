export interface FormContainerProps {
  links: {
    [keyof: string]: number;
  };
  setLink: (link: string) => void;
  increaseCount: (link: string) => void;
}
