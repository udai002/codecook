// app/coursespage/page.tsx
type CoursesPageProps = {
  searchParams: Promise<{ type?: string }>;
};

async function GetCourses(type?: string) {
  const url = type
    ? `http://localhost:3000/api/courses?type=${type}`
    : `http://localhost:3000/api/courses`;

  const res = await fetch(url, {
    // so it always fetches fresh data on dev
    cache: "no-store",
  });

  const json = await res.json();
  return json.data; // array of courses
}

export default async function CoursesPage(props: CoursesPageProps) {
  const { type } = await props.searchParams;
  console.log("this is the type", type);

  const courses = await GetCourses(type);
  // console.log("these are the courses", courses);

  // handle no courses
  if (!courses || courses.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">
            {type ? `No courses found for "${type}"` : "No courses found"}
          </h1>
          <p className="text-gray-600">
            Try adding courses in the database or change the filter.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white-50 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-1">
            {type ? `${type} Courses` : "All Courses"}
          </h1>
          <p className="text-sm text-slate-600">
            Showing {courses.length} course{courses.length > 1 ? "s" : ""}{" "}
            {type ? `in the "${type}" category.` : "from all categories."}
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course: any) => (
            <div
              key={course.slug}
              className="bg-orange-400 rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-semibold text-lg text-white ">
                    {course.title}
                  </h2>
                  {course.level && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-900 text-white">
                      {course.level}
                    </span>
                  )}
                </div>

                {course.category && (
                  <p className="text-xs text-slate-500 mb-1">
                    Category: {course.category}
                  </p>
                )}

                {course.shortDescription && (
                  <p className="text-sm text-slate-700 mt-2 line-clamp-3">
                    {course.shortDescription}
                  </p>
                )}

                {course.durationHours && (
                  <p className="text-xs text-slate-500 mt-2">
                    Duration: {course.durationHours} hours
                  </p>
                )}

                {(course.numLessons || course.numProjects) && (
                  <p className="text-xs text-slate-500 mt-1">
                    {course.numLessons && `${course.numLessons} lessons`}
                    {course.numLessons && course.numProjects && " • "}
                    {course.numProjects && `${course.numProjects} projects`}
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                {course.isFree ? (
                  <span className="text-sm font-semibold text-emerald-600">
                    Free
                  </span>
                ) : (
                  <span className="text-sm font-semibold text-slate-900">
                    ₹{course.price}
                  </span>
                )}

                <button className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
