import type { ReactNode } from 'react';

import { TaskModal } from '~/pages/components';
import { useTasks } from '~/Context';

const Container = ({ children }: { children: ReactNode }) => {
    const { TaskModalHandler } = useTasks();
    return (
        <div className="flex-1 px-20 py-10">
            {children}
            <TaskModal
                open={TaskModalHandler.getOpen()}
                setOpen={TaskModalHandler.setOpen}
                modalType={TaskModalHandler.getType()}
            />
        </div>
    );
};

export default Container;
