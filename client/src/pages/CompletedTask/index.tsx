import { useEffect } from 'react';

import { Icon } from '~/components';
import { TaskList } from '../components';
import { useTasks } from '~/Context';

const CompletedTask = ({ title }: { title: string }) => {
    const { TaskStatistics, TaskModalHandler } = useTasks();
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className="wrapper">
            <div className="flex justify-between">
                <div className="flex justify-center gap-2">
                    <Icon.PendingIcon className="text-main size-12" />
                    <span>
                        <p className="text-2xl font-bold">Hoàn tất</p>
                        <p className="text-xs text-gray-700/70">{TaskStatistics.CompletedTasks()} task đã hoàn tất</p>
                    </span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-2 py-3 text-sm shadow-sm">
                    <div>
                        <Icon.FunnelIcon className="text-main mr-1 mb-1 inline-block" />
                        <span className="font-semibold">Lọc: </span>
                    </div>
                    <div className="flex items-center gap-1 rounded-lg bg-gray-300/20 p-1 text-xs">
                        <div className="hover:text-main cursor-pointer rounded-lg p-2 font-semibold text-gray-500 hover:bg-white hover:shadow-lg">
                            <Icon.BarDownIcon className="hover:text-main mr-1 inline-block" />
                            <span>Mới nhất</span>
                        </div>
                        <div className="hover:text-main cursor-pointer rounded-lg p-2 font-semibold text-gray-500 hover:bg-white hover:shadow-lg">
                            <Icon.BarUpIcon className="hover:text-main mr-1 inline-block" />
                            Cũ nhất
                        </div>
                        <div className="hover:text-main cursor-pointer rounded-lg p-2 font-semibold text-gray-500 hover:bg-white hover:shadow-lg">
                            <Icon.PriorityIcon className="hover:text-main mr-1 mb-1 inline-block size-4" />
                            Ưu tiên
                        </div>
                    </div>
                </div>
            </div>

            <TaskList
                setCreateModal={TaskModalHandler.handleOpenCreateModal}
                setEditModal={TaskModalHandler.handleOpenEditModal}
                setDeleteModal={TaskModalHandler.handleOpenDeleteModal}
            />
        </div>
    );
};

export default CompletedTask;
