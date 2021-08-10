import { TreeGrid,Reorder, Page,RowDD } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';
TreeGrid.Inject(Page,Reorder,RowDD);

let treeGridObj: TreeGrid = new TreeGrid({
  dataSource: sampleData,
  childMapping: 'subtasks',
  treeColumnIndex: 1,
  allowPaging: true,
  //used to reorder the columns+import and inject
  allowReordering: true,
  //same thing with the rows we can adjust the position
  allowRowDragAndDrop: true,
  pageSettings: { pageSize: 15 },
  columns: [
    { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
    {
      field: 'taskName',
      headerText: 'Task Name',
      width: 180,
      textAlign: 'Left'
    },
    {
      field: 'startDate',
      headerText: 'Start Date',
      width: 90,
      textAlign: 'Right',
      type: 'date',
      format: 'yMd'
    },
    { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
  ]
});

treeGridObj.appendTo('#TreeGrid');
