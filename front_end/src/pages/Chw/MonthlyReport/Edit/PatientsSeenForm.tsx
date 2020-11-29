import React from 'react';
import {
  ChwMonthlyReportRecord,
  FormEvent,
  FormStatus,
  readEventValueAsNum,
} from '../../../../api/chws';
import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Text,
  TextInput,
} from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';

export interface PatientsSeenFormProps {
  report: ChwMonthlyReportRecord;
  updateFn: (r: ChwMonthlyReportRecord) => void;
  onSubmit: () => void;
  formEvent: FormEvent;
}

const PatientsSeenForm = (props: PatientsSeenFormProps) => {
  const { report, onSubmit, updateFn, formEvent } = props;

  if (formEvent.status === FormStatus.Submit) {
    return (
      <Box direction={'column'} fill>
        <Spinner size={228} />
      </Box>
    );
  }

  return (
    <Box
      direction={'column'}
      fill
      margin={{ left: 'medium' }}
      overflow={'auto'}
    >
      <Heading level={2}>Patients Seen</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>1 - 4:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'oneToFour.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'oneToFour.male'}
                  size={'small'}
                  value={report.report.patientsSeen.oneToFour.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          oneToFour: {
                            ...report.report.patientsSeen.oneToFour,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'oneToFour.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'oneToFour.female'}
                  size={'small'}
                  value={report.report.patientsSeen.oneToFour.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          oneToFour: {
                            ...report.report.patientsSeen.oneToFour,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>5 - 9:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'fiveToNine.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'fiveToNine.male'}
                  size={'small'}
                  value={report.report.patientsSeen.fiveToNine.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fiveToNine: {
                            ...report.report.patientsSeen.fiveToNine,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'fiveToNine.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'fiveToNine.female'}
                  size={'small'}
                  value={report.report.patientsSeen.fiveToNine.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fiveToNine: {
                            ...report.report.patientsSeen.fiveToNine,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>10 - 14:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'tenToFourteen.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'tentToFourteen.male'}
                  size={'small'}
                  value={report.report.patientsSeen.tenToFourteen.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          tenToFourteen: {
                            ...report.report.patientsSeen.tenToFourteen,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'tenToFourteen.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'tenToFourteen.female'}
                  size={'small'}
                  value={report.report.patientsSeen.tenToFourteen.female}
                  onChange={(e) => {
                    const v = readEventValueAsNum(e);
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          tenToFourteen: {
                            ...report.report.patientsSeen.tenToFourteen,
                            female: v,
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>15 - 19:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'twentyToTwentyFour.female'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'fifteenToNineteen.male'}
                  size={'small'}
                  value={report.report.patientsSeen.fifteenToNineteen.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fifteenToNineteen: {
                            ...report.report.patientsSeen.fifteenToNineteen,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'twentyToTwentyFour.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'twentyToTwentyFour.female'}
                  size={'small'}
                  value={report.report.patientsSeen.twentyToTwentyFour.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          twentyToTwentyFour: {
                            ...report.report.patientsSeen.twentyToTwentyFour,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>20 - 24:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'twentyToTwentyFour.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'twentyToTwentyFour.male'}
                  size={'small'}
                  value={report.report.patientsSeen.twentyToTwentyFour.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          twentyToTwentyFour: {
                            ...report.report.patientsSeen.twentyToTwentyFour,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'twentyToTwentyFour.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'twentyToTwentyFour.female'}
                  size={'small'}
                  value={report.report.patientsSeen.twentyToTwentyFour.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          twentyToTwentyFour: {
                            ...report.report.patientsSeen.twentyToTwentyFour,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>25 - 29:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'twentyFiveToTwentyNine.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'twentyFiveToTwentyNine.male'}
                  size={'small'}
                  value={report.report.patientsSeen.twentyFiveToTwentyNine.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          twentyFiveToTwentyNine: {
                            ...report.report.patientsSeen
                              .twentyFiveToTwentyNine,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'twentyFiveToTwentyNine.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'twentyFiveToTwentyNine.female'}
                  size={'small'}
                  value={
                    report.report.patientsSeen.twentyFiveToTwentyNine.female
                  }
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          twentyFiveToTwentyNine: {
                            ...report.report.patientsSeen
                              .twentyFiveToTwentyNine,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>30 - 34:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'thirtyToThirtyFour.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'thirtyToThirtyFour.male'}
                  size={'small'}
                  value={report.report.patientsSeen.thirtyToThirtyFour.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          thirtyToThirtyFour: {
                            ...report.report.patientsSeen.thirtyToThirtyFour,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'thirtyToThirtyFour.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'thirtyToThirtyFour.female'}
                  size={'small'}
                  value={report.report.patientsSeen.thirtyToThirtyFour.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          thirtyToThirtyFour: {
                            ...report.report.patientsSeen.thirtyToThirtyFour,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>35 - 39:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'thirtyFiveToThirtyNine.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'thirtyFiveToThirtyNine.male'}
                  size={'small'}
                  value={report.report.patientsSeen.thirtyFiveToThirtyNine.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          thirtyFiveToThirtyNine: {
                            ...report.report.patientsSeen
                              .thirtyFiveToThirtyNine,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'thirtyFiveToThirtyNine.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'thirtyFiveToThirtyNine.female'}
                  size={'small'}
                  value={
                    report.report.patientsSeen.thirtyFiveToThirtyNine.female
                  }
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          thirtyFiveToThirtyNine: {
                            ...report.report.patientsSeen
                              .thirtyFiveToThirtyNine,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>40 - 44:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'fortyToFortyFour.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'fortyToFortyFour.male'}
                  size={'small'}
                  value={report.report.patientsSeen.fortyToFortyFour.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fortyToFortyFour: {
                            ...report.report.patientsSeen.fortyToFortyFour,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'fortyToFortyFour.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'fortyToFortyFour.female'}
                  size={'small'}
                  value={report.report.patientsSeen.fortyToFortyFour.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fortyToFortyFour: {
                            ...report.report.patientsSeen.fortyToFortyFour,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>45 - 49:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'fortyFiveToFortyNine.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'fortyFiveToFortyNine.male'}
                  size={'small'}
                  value={report.report.patientsSeen.fortyFiveToFortyNine.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fortyFiveToFortyNine: {
                            ...report.report.patientsSeen.fortyFiveToFortyNine,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'fortyFiveToFortyNine.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'fortyFiveToFortyNine.female'}
                  size={'small'}
                  value={report.report.patientsSeen.fortyFiveToFortyNine.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fortyFiveToFortyNine: {
                            ...report.report.patientsSeen.fortyFiveToFortyNine,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>50 - 54:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'fiftyToFiftyFour.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'fiftyToFiftyFour.male'}
                  size={'small'}
                  value={report.report.patientsSeen.fiftyToFiftyFour.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fiftyToFiftyFour: {
                            ...report.report.patientsSeen.fiftyToFiftyFour,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'fiftyToFiftyFour.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'fiftyToFiftyFour.female'}
                  size={'small'}
                  value={report.report.patientsSeen.fiftyToFiftyFour.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fiftyToFiftyFour: {
                            ...report.report.patientsSeen.fiftyToFiftyFour,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>55 - 59:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'fiftyFiveToFiftyNine.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'fiftyFiveToFiftyNine.male'}
                  size={'small'}
                  value={report.report.patientsSeen.fiftyFiveToFiftyNine.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fiftyFiveToFiftyNine: {
                            ...report.report.patientsSeen.fiftyFiveToFiftyNine,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'fiftyFiveToFiftyNine.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'fiftyFiveToFiftyNine.female'}
                  size={'small'}
                  value={report.report.patientsSeen.fiftyFiveToFiftyNine.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          fiftyFiveToFiftyNine: {
                            ...report.report.patientsSeen.fiftyFiveToFiftyNine,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>60 - 64:</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'sixtyToSixtyFour.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'sixtyToSixtyFour.male'}
                  size={'small'}
                  value={report.report.patientsSeen.sixtyToSixtyFour.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          sixtyToSixtyFour: {
                            ...report.report.patientsSeen.sixtyToSixtyFour,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'sixtyToSixtyFour.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'sixtyToSixtyFour.female'}
                  size={'small'}
                  value={report.report.patientsSeen.sixtyToSixtyFour.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          sixtyToSixtyFour: {
                            ...report.report.patientsSeen.sixtyToSixtyFour,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
          <Box
            border
            direction={'column'}
            align={'start'}
            pad={{ top: 'small', left: 'small', right: 'small' }}
          >
            <Text size={'medium'}>65+ :</Text>
            <Box direction={'row'} align={'start'}>
              <FormField
                name={'sixtyFiveOrMore.male'}
                label={<Text size={'small'}>Male</Text>}
                pad={false}
              >
                <TextInput
                  name={'sixtyFiveOrMore.male'}
                  size={'small'}
                  value={report.report.patientsSeen.sixtyFiveOrMore.male}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          sixtyFiveOrMore: {
                            ...report.report.patientsSeen.sixtyFiveOrMore,
                            male: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
              <FormField
                name={'sixtyFiveOrMore.female'}
                label={<Text size={'small'}>Female</Text>}
                pad={false}
              >
                <TextInput
                  name={'sixtyFiveOrMore.female'}
                  size={'small'}
                  value={report.report.patientsSeen.sixtyFiveOrMore.female}
                  onChange={(e) => {
                    updateFn({
                      ...report,
                      report: {
                        ...report.report,
                        patientsSeen: {
                          ...report.report.patientsSeen,
                          sixtyFiveOrMore: {
                            ...report.report.patientsSeen.sixtyFiveOrMore,
                            female: readEventValueAsNum(e),
                          },
                        },
                      },
                    });
                  }}
                />
              </FormField>
            </Box>
          </Box>
        </Box>
        <Box flex align={'start'} margin={{ left: 'xxsmall', top: 'medium' }}>
          <Button type={'submit'} label={'Save'} primary />
        </Box>
      </Form>
    </Box>
  );
};

export default PatientsSeenForm;
