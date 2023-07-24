import classes from './Notification.module.scss'

const Notification = (props) => {
    let splClasses = '';

    if (props.status === 'error') {
        splClasses = classes.error;
    }
    if (props.status === 'success') {
        splClasses = classes.success;
    }
    const cssClasses = `${classes.notification} ${splClasses}`;

    return (
      <section className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </section>
    );
  };
export default Notification;