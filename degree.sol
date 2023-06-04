pragma solidity >0.8.0;
pragma experimental ABIEncoderV2;

contract degree
{
    string public reg_no;
    string public name;
    string public father_Name;
    string public cgpa;
    struct subject
    {
        string course_code;
        string course_name;
        uint8 credit_hours;
        string grade;
    }
    subject[] courses;
    constructor (string memory reg_no1, string memory name1, string memory father_name1, string memory cgpa1) public   
    {
         reg_no = reg_no1;
         name=name1;
         father_Name=father_name1;
         cgpa=cgpa1;
    }

    function addsubject(string memory course_code1, string memory course_name1, uint8 credit_hours1, string memory grade1) public
    {
        courses.push(subject(course_code1, course_name1, credit_hours1, grade1));
    }

    function getsubjects() public view returns(subject[] memory)
    {
        return courses;
    }
    function getname() public view returns(string memory, string memory, string memory, string memory)
    {
        return (reg_no, name, father_Name, cgpa);
    }

}


