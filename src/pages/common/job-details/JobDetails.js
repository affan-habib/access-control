import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";
import { UrlBuilder } from "helpers/UrlBuilder";
import MainCard from "components/cards/MainCard";
import { Box, Divider, Stack, Typography } from "@mui/material";
import formatDateAndTime from "helpers/formatDateAndTime";

const JobDetails = () => {
  const { id } = useParams();
  const { jobDetails } = useSelector(selectApi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: UrlBuilder.jobServiceApi(`job/post/${id}`),
        output: "jobDetails",
      })
    );
  }, [id]);
  const Text = ({ left, right }) => {
    return (<>
      <Stack direction="row" >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginRight: 2 }}
        >
          {left}
        </Typography>
        <Typography>{right}</Typography>
      </Stack>
      <Box sx={{ margin: 1, mr: 0, ml: 0 }} />
    </>
    );
  };

  // const {deadline, address, va}
  return (
    <MainCard sx={{ width: 1000, marginX: 'auto', padding: 2 }} title={jobDetails?.data?.title || "Job Details Page"} secondary={`${formatDateAndTime(jobDetails?.data?.published_at)}`} headerSX={{ bgcolor: "primary.main", color: "white" }}>
      <Text left="Deadline :" right={formatDateAndTime(jobDetails?.data?.deadline)} />
      <Text left="Address :" right={jobDetails?.data?.address?.address} />
      <Text left="Salary :" right={`BDT ${jobDetails?.data?.salary_min} /= ${jobDetails?.data?.job_pay_type?.name}`} />
      <Text left="Vacancy :" right={jobDetails?.data?.no_of_vacancy} />
      <Divider sx={{ marginY: 4 }} />
      <Typography
        gutterBottom
        variant="h6"
        sx={{ fontWeight: "bold", marginRight: 2 }}
      >
        Job Details :
      </Typography>
      <Typography gutterBottom>
        {jobDetails?.data?.description}
      </Typography>
      <Divider sx={{ marginY: 4 }} />
      <Text left="Education : " right={jobDetails?.data?.edu_qualification?.name} />
      <Typography
        gutterBottom
        variant="h6"
        sx={{ fontWeight: "bold", marginRight: 2 }}
      >
        Educational Requierments :
      </Typography>
      <Typography gutterBottom>
        {jobDetails?.data?.edu_requirements}
      </Typography>
      <Divider sx={{ marginY: 4 }} />
      <Text left="Job Type :" right={jobDetails?.data?.job_type?.name} />
      <Text left="Workplace :" right={jobDetails?.data?.job_work_place?.name} />
      <Text left="Pay Type :" right={jobDetails?.data?.job_pay_type?.name} />
      <Text left="Job Level :" right={jobDetails?.data?.job_level?.name} />
      <Text left="Category :" right={jobDetails?.data?.categories?.name} />
      <Text left="Min Experience :" right={`${jobDetails?.data?.job_exp_min} Years`} />
      <Text left="Age :" right={`${jobDetails?.data?.age_min} to ${jobDetails?.data?.age_max} Years`} />

    </MainCard >
  );
};

export default JobDetails;
