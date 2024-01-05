import React from 'react'
import { BaseEdge, EdgeLabelRenderer, getBezierPath, getSimpleBezierPath, getSmoothStepPath, getStraightPath, useReactFlow } from 'reactflow'

const CustomeEdge = ({id,sourceX, sourceY, targetX, targetY }) => {
    const { setEdges,getEdge } = useReactFlow();
    const [edgePath,labelX, labelY]=getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY
    })
  return (
    <>
        <BaseEdge id={id} path={edgePath} />
        <EdgeLabelRenderer>
        <button
        
         style={{
            position: 'absolute',
            transform: `translate(-50%)  translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all',
          }}
          onClick={() => {
            setEdges((es) => es.filter((e) => e.id !== id));
          }}
        >
            delete
        </button>
        {/* <input
        className='outline-none text-center bg-transparent'
         style={{
            position: 'absolute',
            transform: `translate(-50%)  translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all',
          }}
          value={getEdge(id).label}
          onChange={(element)=>{
            setEdges((e)=>{
                let array=e
                const index=array.findIndex((e)=>e.id===id)
                array[index].label=element.target.value
                return array
            })
          }}
        /> */}
      
      </EdgeLabelRenderer>
    </>
    )
}

export default CustomeEdge