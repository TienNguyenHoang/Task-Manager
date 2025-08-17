/* eslint-disable react-refresh/only-export-components */
import images from '~/assets/images';
import { Icon } from '~/components';
import TaskItem from './TaskItem';
import { useTasks } from '~/Context';

export enum filterOptions {
    all = 'all',
    today = 'today',
    week = 'week',
    high = 'high',
    normal = 'normal',
    low = 'low',
}

type TaskList = {
    filter: filterOptions;
    setCreateModal: () => void;
    setEditModal: (taskId: number) => void;
    setDeleteModal: (taskId: number) => void;
};

const TaskList = ({ filter, setCreateModal, setEditModal, setDeleteModal }: TaskList) => {
    const { isEmpty, getTasks } = useTasks();
    const { filterTasks, warning } = getTasks(filter);

    return (
        <>
            {isEmpty() ? (
                <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-5 shadow-sm">
                    <Icon.CalendarIcon className="text-main bg-main/10 size-14 rounded-full p-3" />
                    <p className="text-lg font-medium">Chưa có task nào cả!</p>
                    <p className="text-xs text-gray-500">Tạo task đầu tiên để bắt đầu thôi nào</p>
                    <button
                        onClick={() => setCreateModal()}
                        className="bg-gradient-color cursor-pointer rounded-xl p-3 text-sm text-white hover:opacity-85"
                    >
                        Thêm task mới
                    </button>
                </div>
            ) : (
                <>
                    {filterTasks?.length !== 0 ? (
                        filterTasks?.map((task) => (
                            <TaskItem
                                key={task.taskId}
                                task={task}
                                setEditModal={setEditModal}
                                setDeleteModal={setDeleteModal}
                            />
                        ))
                    ) : (
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-5 shadow-sm">
                            <img
                                src={images.emptyImage}
                                className="bg-main/5 size-30 rounded-full p-4"
                                alt="Empty Image"
                            />

                            <p className="mb-2 text-lg font-light text-gray-400">{warning}</p>
                        </div>
                    )}
                </>
            )}
            <button
                onClick={() => setCreateModal()}
                className="bg-side/3 hover:bg-side/5 mt-8 flex w-full cursor-pointer items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-gray-300 p-5 shadow-sm"
            >
                <Icon.PlusIcon className="text-main -mt-[2px] size-5" />
                <span className="text-md">Thêm task mới</span>
            </button>
        </>
    );
};

export default TaskList;
