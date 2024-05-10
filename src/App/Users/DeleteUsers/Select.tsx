// hooks
import { useAppDispatch, useAppSelector } from '../../../Store/store';
// slices
import { toggleShowSelect } from '../../../Store/Slices/usersSlice';
// components
import Button from '../../UI/UserComponents/Button';
import Delete from './Options/Delete/Delete';
import SelectAll from './Options/SelectAll';

export default function Select() {
    // hooks
    const { showSelect, selectedUsers } = useAppSelector(
        (state) => state.users
    );

    const dispatch = useAppDispatch();

    // dispatch
    const handleToggle = (): void => {
        dispatch(toggleShowSelect());
    };

    return (
        <div className="flex flex-col items-end gap-[5px]">
            <Button handleClick={handleToggle}>Select</Button>

            {showSelect && (
                <div className="flex gap-[5px]">
                    {selectedUsers.length > 0 && <Delete />}

                    <SelectAll />
                </div>
            )}
        </div>
    );
}
