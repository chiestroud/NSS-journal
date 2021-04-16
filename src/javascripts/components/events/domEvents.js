const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-march-btn')) {
      console.warn('clicked');
    }
    if (e.target.id.includes('delete-modal-march')) {
      console.warn('delete?');
    }
    if (e.target.id.includes('sortByDate')) {
      console.warn('Date');
    }
  });
};

export default domEvents;
