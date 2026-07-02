import { NO_TODO_PAGE_LABEL } from "../constants/todoConstants";

const NoTodoPage = () => {
  return (
    <section className="flex h-full w-full items-center justify-center overflow-y-auto bg-[#fcf7f4] px-6 py-8 text-[#3d3d3d]">
      <div className="w-full max-w-4xl">
        <div className="">
          {/* Empty State Content */}
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[30px] bg-[#fff1ea] text-4xl shadow-inner">
              {NO_TODO_PAGE_LABEL.emptySection.EMOJI_STAR}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ffe8e8] px-4 py-1.5 text-sm font-medium text-[#ff8d8d]">
              <span>{NO_TODO_PAGE_LABEL.emptySection.EMOJI_FLOWER}</span>
              <span>{NO_TODO_PAGE_LABEL.emptySection.SUBTITLE}</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#2f2f2f] md:text-2xl">
              {NO_TODO_PAGE_LABEL.emptySection.TITLE}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#7a7a7a] md:text-lg">
              {NO_TODO_PAGE_LABEL.emptySection.DESCRIPTION}
            </p>
          </div>

          {/* Info Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[28px] border border-[#f5ebe5] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ec] text-2xl">
                {NO_TODO_PAGE_LABEL.infoCards.EXISTING_CARD_EMOJI}
              </div>

              <h2 className="mt-5 text-lg font-semibold text-[#343434]">
                {NO_TODO_PAGE_LABEL.infoCards.EXISTING_CARD_TITLE}
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#7b7b7b]">
                {NO_TODO_PAGE_LABEL.infoCards.EXISTING_CARD_DESCRIPTION}
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f5ebe5] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ecff] text-2xl">
                {NO_TODO_PAGE_LABEL.infoCards.STARTING_CARD_EMOJI}
              </div>

              <h2 className="mt-5 text-lg font-semibold text-[#343434]">
                {NO_TODO_PAGE_LABEL.infoCards.STARTING_CARD_TITLE}
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#7b7b7b]">
                {NO_TODO_PAGE_LABEL.infoCards.STARTING_CARD_DESCRIPTION}
              </p>
            </div>
          </div>

          {/* Motivation Strip */}
          <div className="mt-8 rounded-[28px] border border-[#f3e6ba] bg-[#fff9e8] px-6 py-5">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff1c8] text-2xl">
                {NO_TODO_PAGE_LABEL.motivationStrip.EMOJI}
              </div>

              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#404040]">
                  {NO_TODO_PAGE_LABEL.motivationStrip.TITLE}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#757575]">
                  {NO_TODO_PAGE_LABEL.motivationStrip.DESCRIPTION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoTodoPage;
