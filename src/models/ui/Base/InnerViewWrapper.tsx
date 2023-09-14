import React, {PropsWithChildren} from "react";

type EditType = 'edit' | 'view';

interface ViewWrapperProps {
    editType: EditType;
    editDescriptions?: string;
}

const InnerViewWrapper: React.FC<PropsWithChildren<ViewWrapperProps>> = ({
                                                                             editType,
                                                                             editDescriptions,
                                                                             children,
                                                                         }) => {
    return (
        <div>
            {
                editType === 'edit' && editDescriptions && (
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