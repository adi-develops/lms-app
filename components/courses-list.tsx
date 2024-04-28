import { Category, Course } from "@prisma/client";
import { CourseCard } from "./course-card";

type CourseWithProgressWithCategory = Course & {
    category: Category ;
    chapters: { id: string; }[] ;
    progress: number | null ;
}

interface CoursesListProps {
    items: CourseWithProgressWithCategory[] ;
}



export const CoursesList = ({
    items,
}: CoursesListProps ) => {

    return (
        <div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
                {items.map((item)=> (
                    <div key={item.id}>
                        <CourseCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            imageUrl={item.imageUrl!}
                            price={item.price!}
                            progress={item.progress}
                            chaptersLength={item.chapters.length}
                            category={item?.category?.name ?? ''}
          />
                    </div>
                ))}
            </div>
            {items.length === 0 && (
                <div className="mt-10 text-center text-sm text-muted-foreground">No courses found!</div>
            )}
        </div>
    )
}