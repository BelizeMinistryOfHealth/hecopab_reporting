import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const HomeVisitsDutiesForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Duties Performed: Home Visits</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.dutiesPerformed.homeVisits.oneToFour.male}
            femaleValue={
              report.report.dutiesPerformed.homeVisits.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      oneToFour: {
                        ...report.report.dutiesPerformed.homeVisits.oneToFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      oneToFour: {
                        ...report.report.dutiesPerformed.homeVisits.oneToFour,
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
            maleValue={report.report.dutiesPerformed.homeVisits.fiveToNine.male}
            femaleValue={
              report.report.dutiesPerformed.homeVisits.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.homeVisits.fiveToNine,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.homeVisits.fiveToNine,
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
            maleValue={
              report.report.dutiesPerformed.homeVisits.tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.homeVisits
                          .tenToFourteen,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.homeVisits
                          .tenToFourteen,
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
            maleValue={
              report.report.dutiesPerformed.homeVisits.fifteenToNineteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.homeVisits
                          .fifteenToNineteen,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.homeVisits
                          .fifteenToNineteen,
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
              report.report.dutiesPerformed.homeVisits.twentyToTwentyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .twentyToTwentyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .twentyToTwentyFour,
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
              report.report.dutiesPerformed.homeVisits.twentyFiveToTwentyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.twentyFiveToTwentyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.homeVisits
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.homeVisits
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
              report.report.dutiesPerformed.homeVisits.thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .thirtyToThirtyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .thirtyToThirtyFour,
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
              report.report.dutiesPerformed.homeVisits.thirtyFiveToThirtyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.thirtyFiveToThirtyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.homeVisits
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.homeVisits
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
            maleValue={
              report.report.dutiesPerformed.homeVisits.fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.fortyToFortyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .fortyToFortyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .fortyToFortyFour,
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
              report.report.dutiesPerformed.homeVisits.fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.fortyFiveToFortyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.homeVisits
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.homeVisits
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
            maleValue={
              report.report.dutiesPerformed.homeVisits.fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.fiftyToFiftyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .fiftyToFiftyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .fiftyToFiftyFour,
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
              report.report.dutiesPerformed.homeVisits.fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.fiftyFiveToFiftyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.homeVisits
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.homeVisits
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
            maleValue={
              report.report.dutiesPerformed.homeVisits.sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.sixtyToSixtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .sixtyToSixtyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.homeVisits
                          .sixtyToSixtyFour,
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
            maleValue={
              report.report.dutiesPerformed.homeVisits.sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.homeVisits.sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.homeVisits
                          .sixtyFiveOrMore,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    homeVisits: {
                      ...report.report.dutiesPerformed.homeVisits,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.homeVisits
                          .sixtyFiveOrMore,
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

export default HomeVisitsDutiesForm;
