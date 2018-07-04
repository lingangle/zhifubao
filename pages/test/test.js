Page({
  data: {
    collapseData: {
      onTitleTap: 'handleTitleTap',
      panels: [{
        title: 'Title 1',
        content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        expanded: true,
      }, {
        title: 'Title 2',
        content: ['Content 2'],
        expanded: false,
      },{
        title: 'Title 3',
        content: ['Content 3'],
        expanded: false,
      }, {
        title: 'Title 4',
        content: ['Content 4'],
        expanded: false,
      },{
        title: 'Title 5',
        content: ['Content 5'],
        expanded: false,
      }, {
        title: 'Title 6',
        content: ['Content 6'],
        expanded: false,
      },{
        title: 'Title 7',
        content: ['Content 7'],
        expanded: false,
      }, {
        title: 'Title 8',
        content: ['Content 8'],
        expanded: false,
      }],
    },
  },
  handleTitleTap(e) {
    const { index } = e.target.dataset;
    const panels = this.data.collapseData.panels;
    // android does not supprt Array findIndex
    panels[index].expanded = !panels[index].expanded;
    this.setData({
      collapseData: {
        ...this.data.collapseData,
        panels: [...panels],
      },
    });
  },
});
