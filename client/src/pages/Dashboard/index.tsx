import {
    DashboardIcon,
    PlusIcon,
    PriorityIcon,
    FunnelIcon,
    CalendarIcon,
    CloseIcon,
    BarIcon,
    FlagIcon,
    CompletedIcon,
} from '~/components/Icons';

import { Modal } from '~/components';
import { useState } from 'react';
const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="wrapper">
            <div className="flex justify-between">
                <div className="flex justify-center gap-2">
                    <DashboardIcon className="text-main size-12" />
                    <span>
                        <p className="text-2xl font-bold">Task Overview</p>
                        <p className="text-xs text-gray-700/70">Quản lý task của bạn một cách hiệu quả</p>
                    </span>
                </div>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-gradient-color flex cursor-pointer items-center gap-1 rounded-xl p-3 text-white hover:opacity-85"
                >
                    <PlusIcon className="-mt-[1px] inline-block" />
                    <span>Thêm task mới</span>
                </button>
            </div>
            <div className="mt-8 flex gap-4">
                <div className="flex flex-1 items-center gap-2 rounded-2xl bg-white p-4 shadow-sm">
                    <DashboardIcon className="text-main bg-main/10 size-9 rounded-lg p-2" />
                    <div className="flex-1">
                        <p className="text-main/80 text-2xl font-bold">0</p>
                        <p className="text-xs text-gray-700/70">Tổng Tasks</p>
                    </div>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-2xl bg-white p-4 shadow-sm">
                    <PriorityIcon className="size-9 rounded-lg bg-green-400/10 p-2 text-green-400" />
                    <div className="flex-1">
                        <p className="text-2xl font-bold text-green-500/80">0</p>
                        <p className="text-xs text-gray-700/70">Ưu tiên thấp</p>
                    </div>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-2xl bg-white p-4 shadow-sm">
                    <PriorityIcon className="size-9 rounded-lg bg-orange-500/10 p-2 text-orange-500" />
                    <div className="flex-1">
                        <p className="text-2xl font-bold text-orange-500/80">0</p>
                        <p className="text-xs text-gray-700/70">Ưu tiên vừa</p>
                    </div>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-2xl bg-white p-4 shadow-sm">
                    <PriorityIcon className="size-9 rounded-lg bg-red-500/10 p-2 text-red-500" />
                    <div className="flex-1">
                        <p className="text-2xl font-bold text-red-500/80">0</p>
                        <p className="text-xs text-gray-700/70">Ưu tiên cao</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                <div>
                    <FunnelIcon className="text-main mr-2 mb-1 inline-block" />
                    <span className="text-md font-semibold">Tất cả Tasks</span>
                </div>
                <div className="flex gap-1 rounded-lg bg-gray-300/20 p-2">
                    <div className="hover:text-main hover:outline-main cursor-pointer rounded-lg p-2 text-xs font-semibold text-gray-500 hover:bg-white hover:outline">
                        Tất cả
                    </div>
                    <div className="hover:text-main hover:outline-main cursor-pointer rounded-lg p-2 text-xs font-semibold text-gray-500 hover:bg-white hover:outline">
                        Hôm nay
                    </div>
                    <div className="hover:text-main hover:outline-main cursor-pointer rounded-lg p-2 text-xs font-semibold text-gray-500 hover:bg-white hover:outline">
                        Tuần
                    </div>
                    <div className="hover:text-main hover:outline-main cursor-pointer rounded-lg p-2 text-xs font-semibold text-gray-500 hover:bg-white hover:outline">
                        Cao
                    </div>
                    <div className="hover:text-main hover:outline-main cursor-pointer rounded-lg p-2 text-xs font-semibold text-gray-500 hover:bg-white hover:outline">
                        Vừa
                    </div>
                    <div className="hover:text-main hover:outline-main cursor-pointer rounded-lg p-2 text-xs font-semibold text-gray-500 hover:bg-white hover:outline">
                        Thấp
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-5 shadow-sm">
                <CalendarIcon className="text-main bg-main/10 size-14 rounded-full p-3" />
                <p className="text-lg font-medium">Chưa có task nào cả!</p>
                <p className="text-xs text-gray-500">Tạo task đầu tiên để bắt đầu thôi nào</p>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-gradient-color cursor-pointer rounded-xl p-3 text-sm text-white hover:opacity-85"
                >
                    Thêm task mới
                </button>
            </div>
            <button
                onClick={() => setOpen(true)}
                className="bg-side/3 hover:bg-side/5 mt-8 flex w-full cursor-pointer items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-gray-300 p-5 shadow-sm"
            >
                <PlusIcon className="text-main -mt-[2px] size-5" />
                <span className="text-md">Thêm task mới</span>
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="w-100 p-2">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <PlusIcon className="text-main border-main mr-1 mb-1 inline-block size-5 rounded-full border p-1" />
                            <span className="text-lg font-semibold">Tạo task mới</span>
                        </div>
                        <button onClick={() => setOpen(false)}>
                            <CloseIcon className="size-8 cursor-pointer rounded-full p-2 text-gray-500 hover:bg-gray-300/30" />
                        </button>
                    </div>
                    <div className="mt-6">
                        <div className="mb-3">
                            <p className="mb-1 text-sm font-semibold">Tiêu đề task</p>
                            <input
                                type="text"
                                spellCheck={false}
                                className="w-full rounded-md p-2 pl-3 text-sm outline-1 outline-gray-300"
                                placeholder="Nhập tiêu đề"
                            />
                        </div>
                        <div className="mb-3">
                            <p className="mb-1 text-sm font-semibold">
                                <BarIcon className="text-main mr-1 mb-1 inline-block" />
                                <span>Mô tả</span>
                            </p>
                            <textarea
                                spellCheck={false}
                                className="w-full rounded-md p-2 pl-3 text-sm outline-1 outline-gray-300"
                                placeholder="Thêm mô tả cho task của bạn"
                            />
                        </div>
                        <div className="mb-3 flex items-center gap-4">
                            <div className="flex-1">
                                <p className="mb-1 text-sm font-semibold">
                                    <FlagIcon className="text-main mr-1 mb-1 inline-block size-5" />
                                    <span>Độ ưu tiên</span>
                                </p>
                                <select
                                    name="priority"
                                    className="h-8 w-full rounded-lg border border-gray-200 px-3 py-1 text-sm"
                                    id=""
                                >
                                    <option value="">Thấp</option>
                                    <option value="">Vừa</option>
                                    <option value="">Cao</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <p className="mb-1 text-sm font-semibold">
                                    <CalendarIcon className="text-main mr-1 mb-1 inline-block size-5" />
                                    <span>Hạn chót</span>
                                </p>
                                <input
                                    type="date"
                                    className="h-8 w-full rounded-lg border border-gray-200 px-3 text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <CompletedIcon className="text-main mr-1 mb-1 inline-block size-5" />
                                <span className="text-sm font-bold">Trạng thái</span>
                            </div>
                            <div className="mt-1 ml-[3px] text-sm">
                                <input type="radio" name="status" className="accent-main" /> <span>Hoàn tất</span>
                                <input type="radio" name="status" className="accent-main ml-3" /> <span>Chờ xử lý</span>
                            </div>
                        </div>
                        <button className="bg-gradient-color mt-4 w-full cursor-pointer rounded-lg p-2 text-center text-white opacity-85 hover:opacity-100">
                            <PlusIcon className="mr-2 mb-1 inline-block rounded-full border border-white p-1 text-white" />
                            <span>Tạo task</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Dashboard;
