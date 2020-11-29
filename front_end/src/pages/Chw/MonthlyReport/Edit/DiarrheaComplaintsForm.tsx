import React from 'react';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';
import ChwEditFormProps from './ChwEditFormProps';

const DiarrheaComplaintsForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Complaints: Diarrhea</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.complaints.diarrhea.oneToFour.male}
            femaleValue={report.report.complaints.diarrhea.oneToFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      oneToFour: {
                        ...report.report.complaints.diarrhea.oneToFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      oneToFour: {
                        ...report.report.complaints.diarrhea.oneToFour,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.diarrhea.fiveToNine.male}
            femaleValue={report.report.complaints.diarrhea.fiveToNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fiveToNine: {
                        ...report.report.complaints.diarrhea.fiveToNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fiveToNine: {
                        ...report.report.complaints.diarrhea.fiveToNine,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.diarrhea.tenToFourteen.male}
            femaleValue={report.report.complaints.diarrhea.tenToFourteen.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      tenToFourteen: {
                        ...report.report.complaints.diarrhea.tenToFourteen,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      tenToFourteen: {
                        ...report.report.complaints.diarrhea.tenToFourteen,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.diarrhea.fifteenToNineteen.male}
            femaleValue={
              report.report.complaints.diarrhea.fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fifteenToNineteen: {
                        ...report.report.complaints.diarrhea.fifteenToNineteen,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fifteenToNineteen: {
                        ...report.report.complaints.diarrhea.fifteenToNineteen,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={
              report.report.complaints.diarrhea.twentyToTwentyFour.male
            }
            femaleValue={
              report.report.complaints.diarrhea.twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      twentyToTwentyFour: {
                        ...report.report.complaints.diarrhea.twentyToTwentyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      twentyToTwentyFour: {
                        ...report.report.complaints.diarrhea.twentyToTwentyFour,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={
              report.report.complaints.diarrhea.twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.complaints.diarrhea.twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.diarrhea
                          .twentyFiveToTwentyNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.diarrhea
                          .twentyFiveToTwentyNine,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={
              report.report.complaints.diarrhea.thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.complaints.diarrhea.thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.diarrhea.thirtyToThirtyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.diarrhea.thirtyToThirtyFour,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={
              report.report.complaints.diarrhea.thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.complaints.diarrhea.thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.diarrhea
                          .thirtyFiveToThirtyNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.diarrhea
                          .thirtyFiveToThirtyNine,
                        female: readEventValueAsNum(e),
                      },
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
          <ChwFormField
            label={'40 - 44: '}
            maleValue={report.report.complaints.diarrhea.fortyToFortyFour.male}
            femaleValue={
              report.report.complaints.diarrhea.fortyToFortyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fortyToFortyFour: {
                        ...report.report.complaints.diarrhea.fortyToFortyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fortyToFortyFour: {
                        ...report.report.complaints.diarrhea.fortyToFortyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyToFortyFour.male'}
            femaleFieldName={'fortyToFortyFour.female'}
          />
          <ChwFormField
            label={'45 - 49: '}
            maleValue={
              report.report.complaints.diarrhea.fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.complaints.diarrhea.fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.diarrhea
                          .fortyFiveToFortyNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.diarrhea
                          .fortyFiveToFortyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyFiveToFortyNine.male'}
            femaleFieldName={'fortyFiveToFortyNine.female'}
          />
          <ChwFormField
            label={'50 - 54: '}
            maleValue={report.report.complaints.diarrhea.fiftyToFiftyFour.male}
            femaleValue={
              report.report.complaints.diarrhea.fiftyToFiftyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.diarrhea.fiftyToFiftyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.diarrhea.fiftyToFiftyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyToFiftyFour.male'}
            femaleFieldName={'fiftyToFiftyFour.female'}
          />
          <ChwFormField
            label={'55 - 59: '}
            maleValue={
              report.report.complaints.diarrhea.fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.complaints.diarrhea.fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.diarrhea
                          .fiftyFiveToFiftyNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.diarrhea
                          .fiftyFiveToFiftyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyFiveToFiftyNine.male'}
            femaleFieldName={'fiftyFiveToFiftyNine.female'}
          />
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'60 - 64: '}
            maleValue={report.report.complaints.diarrhea.sixtyToSixtyFour.male}
            femaleValue={
              report.report.complaints.diarrhea.sixtyToSixtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.diarrhea.sixtyToSixtyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.diarrhea.sixtyToSixtyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyToSixtyFour.male'}
            femaleFieldName={'sixtyToSixtyFour.female'}
          />
          <ChwFormField
            label={'65+: '}
            maleValue={report.report.complaints.diarrhea.sixtyFiveOrMore.male}
            femaleValue={
              report.report.complaints.diarrhea.sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.diarrhea.sixtyFiveOrMore,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    diarrhea: {
                      ...report.report.complaints.diarrhea,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.diarrhea.sixtyFiveOrMore,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyFiveOrMore.male'}
            femaleFieldName={'sixtyFiveOrMore.female'}
          />
        </Box>
        <Box flex align={'start'} margin={{ left: 'xxsmall', top: 'medium' }}>
          <Button type={'submit'} label={'Save'} primary />
        </Box>
      </Form>
    </Box>
  );
};

export default DiarrheaComplaintsForm;
