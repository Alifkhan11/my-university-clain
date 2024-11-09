/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd"
import { useEnrolCourseMutation, useGetAllOfferCoursesQuery } from "../../redux/fetures/student/studentCourseManagement.api"

const OfferedCourses=()=>{

    const {data:offeredCourseData}=useGetAllOfferCoursesQuery(undefined)
    const [enrollCourse]=useEnrolCourseMutation()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const singleObject=offeredCourseData?.data?.reduce((acc:any,item:any)=>{
        const key = item?.course?.title
        acc[key]=acc[key] || {courseTitle:key,section:[]}
        acc[key].section.push({
            section:item.section,
            _id:item._id,
            days:item.days,
            startTime:item.startTime,
            endTime:item.endTime
        })
        return acc
    },{})

    const modifiededData=Object.values(singleObject? singleObject :{})

    // console.log(modifiededData);

    const handleEnroll=async(id:string)=>{
        const enrole={
            offeredCourse:id
        }

        const res=await enrollCourse(enrole)
        console.log(res.data);
        
    }
    

   return (
       <div>
           {
            modifiededData.map((item:any)=>{
                return <div>
                     <h1> {item.courseTitle} </h1>
                     <div>
                        {item.section.map((section:any)=>{
                            return (
                                <Row
                                    justify="space-between"
                                    align="middle"
                                    style={{ borderTop: 'solid #d4d4d4 2px', padding: '10px' }}
                                >
                                    <Col span={5}>Section: {section.section} </Col>
                    <Col span={5}>
                      days:{' '}
                      {section.days.map((day:any) => (
                        <span> {day} </span>
                      ))}
                    </Col>
                    <Col span={5}>Start Time: {section.startTime} </Col>
                    <Col span={5}>End Time: {section.endTime} </Col>
                    <Button onClick={() => handleEnroll(section._id)}>
                      Enroll
                    </Button>
                                </Row>
                            )
                        })}
                     </div>
                     </div>
                
            })
           }
       </div>
   )
}

export default OfferedCourses