import React, {PropsWithChildren} from "react";

type EditType = 'view' | 'edit' | 'preview';
interface ViewWrapperProps {
    editType: EditType;
    canEdit: boolean;
    editDescriptions?: string;
}

const InnerViewWrapper: React.FC<PropsWithChildren<ViewWrapperProps>> = ({
                                                                             canEdit,
                                                                             editType,
                                                                             editDescriptions,
                                                                             children,
                                                                         }) => {
    return (
        <div>
            {
                editType === 'view' && !canEdit && editDescriptions && (
                    <div style={{
                        color: 'gray',
                    }}>
                        {editDescriptions ?? ''}
                    </div>
                )
            }
            <div>
                {children}
            </div>
        </div>
    )
}


export default InnerViewWrapper