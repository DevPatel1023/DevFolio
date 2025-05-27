
interface BadgeProps {
    text : string;
    className : string;
}

const Badge = ({text,className} : BadgeProps) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

export default Badge;
