import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

// const handleStyle = { left: 50 };

function TextUpdaterNode({ data, isConnectable }) {
 
//     const onChange = useCallback((evt) => {
//     console.log(evt.target.value);
//   }, []);



    const [content,setContent]=useState(data.label)
    const onChange=(e)=>{
        setContent(e.target.value)
    }

  return (
    <div className="h-[50px] shadow-lg shadow-gray-500 hover:shadow-xl hover:shadow-gray-700 duration-200 p-2 border-[2px] border-stone-400  rounded-md">
      <div className='w-full h-full '>
        <input id="text" name="text" value={content} onChange={onChange} className="nodrag font-[700] w-full h-full text-center px-4 py-2 border rounded-md outline-none focus:border-blue-500 bg-transparent" />
      </div>      
      {/* <Handle type="target,source" id="r" position={Position.Right}  isConnectable={isConnectable} /> */}
      {/* <Handle type="target,source" id="l"  position={Position.Left} isConnectable={isConnectable} /> */}
      <Handle id='t' type="target" className='w-16 !bg-teal-500'  position={Position.Top} isConnectable={isConnectable} />
      <Handle type="source" className='w-16 !bg-teal-500'  position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
