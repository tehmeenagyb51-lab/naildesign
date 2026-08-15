import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-white via-rose-50/40 to-pink-50 flex items-center justify-center px-5 py-12">
            <div className="mx-auto w-full max-w-3xl text-center">
                {/* 404 */}
                <div className="relative mb-6">
                    <h1 className="text-[100px] leading-none font-bold tracking-tight text-rose-100 sm:text-[160px] md:text-[200px]">
                        404
                    </h1>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="rounded-full bg-white/80 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-rose-500 shadow-sm backdrop-blur-sm sm:text-base">
                            Page Not Found
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                        We couldn’t find the page you’re looking for.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
                        It looks like the page you’re looking for is no longer available. Please return to the homepage and continue exploring our services.
                    </p>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            to="/"
                            className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-200 sm:w-auto"
                        >
                            Back to Home
                        </Link>

                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="inline-flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 sm:w-auto"
                        >
                            Go Back
                        </button>
                    </div>
                </div>

                {/* Decorative element */}
                <div className="mt-12 flex items-center justify-center gap-3 text-rose-300">
                    <span className="h-px w-12 bg-rose-200" />
                    <span className="h-2 w-2 rounded-full bg-rose-300" />
                    <span className="h-px w-12 bg-rose-200" />
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;