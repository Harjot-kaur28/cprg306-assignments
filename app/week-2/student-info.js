import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <p>Name: Harjot Kaur</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/Harjot-kaur28/cprg306-assignments.git">
          https://github.com
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
