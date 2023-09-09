import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tagSelected,
  tagRemoved,
} from "../../redux/slice-slate/filter/filterSlice";

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filters);

  const isSelectd = tags.includes(title) ? true : false;

  const handleToogleSelectTags = () => {
    if (isSelectd) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  //Selected tags style
  const style = isSelectd
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <div className={style} onClick={handleToogleSelectTags}>
      {title}
    </div>
  );
};

export default Tag;
