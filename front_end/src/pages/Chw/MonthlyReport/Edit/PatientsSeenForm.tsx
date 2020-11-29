import React, { ChangeEvent } from 'react';
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

interface ChwFormFieldProps {
  label: string;
  maleValue: number;
  femaleValue: number;
  maleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  femaleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maleFieldName: string;
  femaleFieldName: string;
}

const ChwFormField = (props: ChwFormFieldProps) => {
  const {
    label,
    maleValue,
    femaleValue,
    maleOnChange,
    femaleOnChange,
    maleFieldName,
    femaleFieldName,
  } = props;
  return (
    <Box
      border
      direction={'column'}
      align={'start'}
      pad={{ top: 'small', left: 'small', right: 'small' }}
    >
      <Text size={'medium'}>{label}</Text>
      <Box direction={'row'} align={'start'}>
        <FormField
          name={maleFieldName}
          label={<Text size={'small'}>Male</Text>}
          pad={false}
        >
          <TextInput
            name={maleFieldName}
            size={'small'}
            value={maleValue}
            onChange={maleOnChange}
          />
        </FormField>
        <FormField
          name={femaleFieldName}
          label={<Text size={'small'}>Female</Text>}
          pad={false}
        >
          <TextInput
            name={femaleFieldName}
            size={'small'}
            value={femaleValue}
            onChange={femaleOnChange}
          />
        </FormField>
      </Box>
    </Box>
  );
};

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
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.patientsSeen.oneToFour.male}
            femaleValue={report.report.patientsSeen.oneToFour.female}
            maleOnChange={(e) => {
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
            femaleOnChange={(e) => {
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
            maleFieldName={'oneToFour.male'}
            femaleFieldName={'oneToFour.female'}
          />
          <ChwFormField
            label={'5 - 9: '}
            maleValue={report.report.patientsSeen.fiveToNine.male}
            femaleValue={report.report.patientsSeen.fiveToNine.female}
            maleOnChange={(e) => {
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
            femaleOnChange={(e) => {
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
            maleFieldName={'fiveToNine.male'}
            femaleFieldName={'fiveToNine.female'}
          />
          <ChwFormField
            label={'10 - 14: '}
            maleValue={report.report.patientsSeen.tenToFourteen.male}
            femaleValue={report.report.patientsSeen.tenToFourteen.female}
            maleOnChange={(e) => {
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
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    tenToFourteen: {
                      ...report.report.patientsSeen.tenToFourteen,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'tenToFourteen.male'}
            femaleFieldName={'tenToFourteen.female'}
          />
          <ChwFormField
            label={'15 - 19: '}
            maleValue={report.report.patientsSeen.fifteenToNineteen.male}
            femaleValue={report.report.patientsSeen.fifteenToNineteen.female}
            maleOnChange={(e) => {
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
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fifteenToNineteen: {
                      ...report.report.patientsSeen.fifteenToNineteen,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'fifteenToNineteen.male'}
            femaleFieldName={'fifteenToNineteen.female'}
          />
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'20 - 24: '}
            maleValue={report.report.patientsSeen.twentyToTwentyFour.male}
            femaleValue={report.report.patientsSeen.twentyToTwentyFour.female}
            maleOnChange={(e) => {
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
            femaleOnChange={(e) => {
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
            maleFieldName={'twentyToTwentyFour.male'}
            femaleFieldName={'twentyToTwentyFour.female'}
          />
          <ChwFormField
            label={'25 - 29: '}
            maleValue={report.report.patientsSeen.twentyFiveToTwentyNine.male}
            femaleValue={
              report.report.patientsSeen.twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    twentyFiveToTwentyNine: {
                      ...report.report.patientsSeen.twentyFiveToTwentyNine,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    twentyFiveToTwentyNine: {
                      ...report.report.patientsSeen.twentyFiveToTwentyNine,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyFiveToTwentyNine.male'}
            femaleFieldName={'twentyFiveToTwentyNine.female'}
          />
          <ChwFormField
            label={'30 - 34: '}
            maleValue={report.report.patientsSeen.thirtyToThirtyFour.male}
            femaleValue={report.report.patientsSeen.thirtyToThirtyFour.female}
            maleOnChange={(e) => {
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
            femaleOnChange={(e) => {
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
            maleFieldName={'thirtyToThirtyFour.male'}
            femaleFieldName={'thirtyToThirtyFour.female'}
          />
          <ChwFormField
            label={'35 - 39: '}
            maleValue={report.report.patientsSeen.thirtyFiveToThirtyNine.male}
            femaleValue={
              report.report.patientsSeen.thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    thirtyFiveToThirtyNine: {
                      ...report.report.patientsSeen.thirtyFiveToThirtyNine,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    thirtyFiveToThirtyNine: {
                      ...report.report.patientsSeen.thirtyFiveToThirtyNine,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyFiveToThirtyNine.male'}
            femaleFieldName={'thirtyFiveToThirtyNine.female'}
          />
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
