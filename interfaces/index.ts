export interface CardProps {
    title: string;
    image: string;
    description: string;
}

export interface ButtonProps {
    label: string;
    onClick: ()=> void;
    className?: string;
}