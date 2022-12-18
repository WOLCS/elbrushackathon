import React from 'react'
import { Container, Flex, Header, ScrollArea, Table } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useGetSchemesFullQuery } from '../api/botApi'

export const AdminPage = () => {
   const { data, isLoading } = useGetSchemesFullQuery()
   const [state, handlers] = useListState(data)
   React.useEffect(() => {
      handlers.setState(data)
   }, [isLoading])
   const items = state?.map((item, index) => (
      <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
         {(provided, i) => (
            <tr ref={provided.innerRef} key={i} {...provided.draggableProps}>
               <td>
                  <div {...provided.dragHandleProps}>!!!</div>
               </td>
               <td style={{ width: 80 }}>{item.schemeId}</td>
               <td style={{ width: 120 }}>{item.title}</td>
               <td style={{ width: 120 }}>{item.startSchemeNodeId}</td>
               <td style={{ width: 80 }}>{JSON.stringify(item.schemeNodes?.[0])}</td>
               <td>{item.mass}</td>
            </tr>
         )}
      </Draggable>
   ))

   return (
      <Container size="sm">
         <Flex gap="xl" align="stretch" direction="column">
            <Header height={30}>Admin page</Header>
            <ScrollArea>
               <DragDropContext
                  onDragEnd={({ destination, source }) =>
                     handlers.reorder({ from: source.index, to: destination?.index || 0 })
                  }
               >
                  <Table sx={{ minWidth: 420, '& tbody tr td': { borderBottom: 0 } }}>
                     <thead>
                        <tr>
                           <th style={{ width: 40 }} />
                           <th style={{ width: 80 }}>Position</th>
                           <th style={{ width: 120 }}>Name</th>
                           <th style={{ width: 40 }}>Symbol</th>
                           <th>Mass</th>
                        </tr>
                     </thead>
                     <Droppable droppableId="dnd-list" direction="vertical">
                        {provided => (
                           <tbody {...provided.droppableProps} ref={provided.innerRef}>
                              {items}
                              {provided.placeholder}
                           </tbody>
                        )}
                     </Droppable>
                  </Table>
               </DragDropContext>
            </ScrollArea>
         </Flex>
      </Container>
   )
}
