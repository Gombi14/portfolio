import React from "react";

const DataCard = ({ item, onDetail, onDelete }) => {
    const imageKey = Object.keys(item).find(key => key === 'img' || key === 'foto');

    return (
        <div className="bg-[#1c253b] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
            {imageKey && item[imageKey] && (
                <div className="flex items-center justify-center p-4">
                    <img
                        src={item[imageKey]}
                        alt="Card visual"
                        className="max-w-full object-cover max-h-48"
                    />
                </div>
            )}
            <div className="p-4 space-y-1">
                {Object.entries(item).map(([key, value]) => (
                    !["_id", "__v", "img", "foto"].includes(key) && (
                        <p key={key} className="text-sm">
                            <span className="font-semibold capitalize">{key}:</span> {value}
                        </p>
                    )
                ))}
                <div className="flex justify-end gap-4 mt-4">
                    <button
                        onClick={onDetail}
                        className="px-3 py-1 bg-blue-900 hover:bg-blue-950 text-amber-200 rounded text-sm font-medium transition-all duration-300" 
                    >
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                        onClick={() => onDelete(item._id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-medium transition-all duration-300"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataCard;
