import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Blogs = () => {
  return (
    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-sm">
        <PageTitle title="Blogs" />
      <div class="collapse-title text-xl font-medium">
        Focus me to see content
      </div>
      <div class="collapse-content"> 
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </div>
    </div>
  );
};

export default Blogs;