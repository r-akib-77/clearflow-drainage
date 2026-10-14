import { business } from "@/config/business";

export default function AnnouncementBar() {
  return (
    <div className="bg-deep text-white">
      <p className="container-x py-2 text-center text-[13px] leading-5 tracking-wide">
        {business.tagline}
        <span className="ml-2 hidden rounded-full bg-teal/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-teal sm:inline-block">
          Demo website
        </span>
      </p>
    </div>
  );
}
