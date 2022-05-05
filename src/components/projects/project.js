import "../../styles/project.css";

export default function Project(props) {
  return (
    <div class="project">
      <a class="project-link" href="#">
        <div class="project-card">
          <div class="project-card-inner">
            <img src={"../projects/" + props.name + ".jpg"} />
          </div>
        </div>
        <div class="project-detail">
          <div class="project-detail-bold">This is project No.1</div>
          <div class="project-detail-light">Project No.1</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
            <polygon points="6.767 0.603 6.767 5.897 0.871 0 0 0.872 5.894 6.767 0.605 6.767 0.605 8 8 8 8 0.603 6.767 0.603"></polygon>
          </svg>
        </div>
      </a>
    </div>
  );
}