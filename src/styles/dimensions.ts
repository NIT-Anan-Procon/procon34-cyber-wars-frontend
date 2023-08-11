export type InputSizeProps= 'small' | 'medium' | 'large';

export const InputSize= (inputSize?: InputSizeProps) => {
  const sizeSpecificStyles= {
    small: `
    
    `,
    medium: `
    
    `,
    large: `
    
    `,
  };
  switch (inputSize) {
    case 'small': return sizeSpecificStyles.small;
    case 'medium': return sizeSpecificStyles.medium;
    case 'large': return sizeSpecificStyles.large;
    default: return sizeSpecificStyles.small;
  }
}