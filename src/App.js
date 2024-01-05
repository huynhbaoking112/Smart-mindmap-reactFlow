import { useCallback, useState } from 'react';
import ReactFlow, {
  applyEdgeChanges, applyNodeChanges ,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeResizer,
  NodeToolbar,
  Panel,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import TextUpdaterNode from './UpdateText';
import ColorPicker from 'react-pick-color';
import CustomeEdge from './custom/CustomeEdge';




const initialNodes = [
  { id: '1',type: 'textUpdater', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2',type: 'textUpdater', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '3',type: 'textUpdater', position: { x: 0, y: 200 }, data: { label: '3' }, },
];
const initialEdges = [{ id: 'e1-2', source: '1' ,target: '2',label: 'to the', type: 'custome-edge' },
{ id: 'e2-3', source: '2', target: '3',label: 'to the', type: 'custome-edge' },
];

const nodeTypes = { textUpdater: TextUpdaterNode };
const edgeTypes={
  'custome-edge':CustomeEdge
}



function App() {
  //HandleBackground
  const [background,setBackground]=useState("lines")
  const [color, setColor] = useState('#F4F1F1')
  const [openColor,setOpenColor]=useState(false)
  const [numgap,setNumGap]=useState(28)


  const HandleOpenColor=()=>{
    setOpenColor(!openColor)
  }

  const HandleNumGap=(e)=>{
    setNumGap(e.target.value)
  }
//-------------------------------------------------------







//---------------------------------------------------------
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  //Xu li cac tuy chon node and adges
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange=useCallback(
    (changes)=>setEdges((e)=>applyEdgeChanges(changes,e)),
    [setEdges]
  )

//Xu li connect giua cac nut (tao mot adges moi)
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
//---------------------------------------------------------
  


  return (
    <div className=' h-[100vh] w-[100vw]'>


    {/* handleOverview */}
     
   
    <div className='fixed top-[5px]  hover:translate-x-[200px] left-[-200px]  p-1 w-[250px] h-[75vh] bg-[#ECE3CE]  duration-300 z-[10]'>
          <div className='w-full flex h-[45px]' >
                <select className='w-[33%] border-[1px] hover:scale-105 duration-300 hover:cursor-pointer bg-[#739072] text-white h-full outline-none' value={background} onChange={(e)=>setBackground(e.target.value)}  >
                    <option value={"dots"} >dots</option>
                    <option value={"lines"} >lines</option>
                    <option value={"cross"}>cross</option>
                </select>
                <div className='w-[33%] border-[1px] hover:scale-105 duration-300  bg-[#739072] text-white relative flex items-center justify-center hover:cursor-pointer '>
                <div onClick={HandleOpenColor} >
                    Color
                </div>
                {openColor&& <div className='absolute top-[50px] left-0'><ColorPicker color={color} onChange={color => setColor(color.hex)} /></div>}
                </div>
                <div className='w-[33%] hover:scale-105 duration-300  border-[1px] bg-[#739072] text-white flex items-center justify-center hover:cursor-pointer ' >
                      <input type='number' min={1} className='outline-none bg-transparent w-full text-center' value={numgap} onChange={HandleNumGap} />
                </div>
          </div>
    </div>



      <ReactFlow  nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        >
        
        <Background color={color} gap={numgap}  variant={background} />
        <Controls />
        <MiniMap />
        <Panel />
        <NodeToolbar />
        <NodeResizer />
        
     </ReactFlow>
    </div>
  );
}

export default App;
