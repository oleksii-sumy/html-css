import React, { Children } from 'react';

class Expand extends React.Component {
  state = {
    status: false,
  };

  HandleStatusContent = () => {
    this.state.status === true
      ? this.setState({
          status: false,
        })
      : this.setState({
          status: true,
        });
  };

  render() {
    const { title, children} = this.props;
    let iconArrow;
    let content;

    if (!this.state.status) {
      iconArrow = <i className="fas fa-chevron-down"></i>;
      content = null;
    } else {
      iconArrow = <i className="fas fa-chevron-up"></i>;
      content = <div className="expand__content">{children}</div>;
    }

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.HandleStatusContent}>
            {iconArrow}
          </button>
        </div>
        {content}
      </div>
    );
  }
}

export default Expand;

{
  /* <i class="fa-solid fa-chevron-down"></i>; */
}
