const AuthFeatureCard = ({ icon, title, description, toneClassName }) => {
  const FeatureIcon = icon;

  return (
    <div className="rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_12px_30px_rgba(206,152,136,0.08)] backdrop-blur-sm">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${toneClassName}`}
      >
        <FeatureIcon className="h-5 w-5 text-[#5b4a40]" strokeWidth={2} aria-hidden />
      </div>

      <h3 className="mt-4 text-base font-semibold text-[#2f271f]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#7b6f67]">{description}</p>
    </div>
  );
};

export default AuthFeatureCard;
